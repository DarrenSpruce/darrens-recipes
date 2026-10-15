import {addToShopping,type State,type Recipe} from './kitchen';
export const phoneTabs=['next','recipes','shopping'] as const;
export function startView(phone:boolean,requested:string|null):'next'|'recipes'|'shopping'|'notebook'|'history'{
 if(requested&&['next','recipes','shopping','notebook','history'].includes(requested))return requested as ReturnType<typeof startView>;
 return phone?'next':'recipes';
}
export function plannedRecipes(state:State):Recipe[]{return state.next.map(id=>state.recipes.find(r=>r.id===id)).filter((r):r is Recipe=>!!r);}
export function shopPlanned(state:State):State{return plannedRecipes(state).reduce((next,r)=>addToShopping(next,r),state);}
