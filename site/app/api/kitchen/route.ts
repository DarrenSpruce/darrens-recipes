import { env } from 'cloudflare:workers';
import { initialState,validState } from '../../../lib/kitchen';
export const dynamic='force-dynamic';
const response=(data:unknown,status=200)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
// Shared notebook protected by the confirmed owner-private Sites access boundary.
export async function GET() {
 try {
  const row=await env.DB!.prepare('SELECT version,data FROM kitchen_state WHERE id = ?').bind('kitchen').first<{version:number;data:string}>();
  return response(row?{version:row.version,state:JSON.parse(row.data)}:{version:0,state:initialState});
 }catch {return response({error:'Your kitchen could not be loaded. Please try again.'},503);}
}
export async function PUT(request:Request) {
 const origin=request.headers.get('origin');
 if(origin&&origin!==new URL(request.url).origin)return response({error:'Invalid request origin.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return response({error:'JSON is required.'},415);
 try {
  const raw=await request.text();
  if(raw.length>2_000_000)return response({error:'This backup is too large.'},413);
  const {version,state}=JSON.parse(raw);
  if(!Number.isSafeInteger(version)||version<0||!validState(state))return response({error:'Please check the recipe, notes and quantities before saving.'},400);
  const json=JSON.stringify(state);
  const result=version===0
   ?await env.DB!.prepare('INSERT OR IGNORE INTO kitchen_state (id,version,data) VALUES (?,1,?)').bind('kitchen',json).run()
   :await env.DB!.prepare('UPDATE kitchen_state SET data = ?, version = version + 1 WHERE id = ? AND version = ?').bind(json,'kitchen',version).run();
  if(!result.meta.changes)return response({error:'Your kitchen changed in another tab or device. Reload the latest copy, then save your change again.'},409);
  return response({version:version+1});
 } catch {return response({error:'Could not save. Your current changes are still here; please retry.'},503);}
}
