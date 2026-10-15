# Darren’s Kitchen

Private international recipe rotation with durable recipe editing, a cooking log, shopping checkboxes and an editable knowledge base. All main records live in a Sites-provisioned D1 database. The browser holds only temporary cooking ticks and view/filter state.

## Using the kitchen

- Browse or search titles, cuisines, ingredients and adjustments. Filter by diet, cooking status or time.
- Open a recipe for original batch quantities, full steps, personal notes and qualitative nutrition sources.
- Bookmark dishes for Cook next. Add their ingredients to Shopping; check off or remove items there.
- Use I cooked this to log a date, taste rating and learning. Unknown historical cooking dates remain unknown; report dates are labelled separately.
- Add recipe or Edit recipe saves without rebuilding the site. Kitchen notes are editable in the same way.
- Download backup exports recipes, notes, shopping, shortlist and cooking history. Restore accepts a complete backup and asks before replacing the current collection.
- Refresh when switching devices to load the latest saved copy. Concurrent outdated writes return a conflict rather than overwriting other edits.

## Content provenance

Seed collection: DarrenSpruce/darrens-recipes `recipes.json` at `6a509bf8621c1993b1a49735575aa7c8e160540b` (retrieved 15 October 2026). Historical reports: `cooking-history.json` at `f053b1cc37da34b0497909d1bbebf7f8816bd195`. Bread notebook: `notebook.html` at `731de9aa1156709d2092362a3ffa95d45245b9c1`. Original fetched files are retained under data/.

The Persian sauce instructions now incorporate recorded feedback, with 150–200 ml stock explicitly labelled as a proposed working quantity. Fajita pepper dimensions and optional taco shells follow Darren’s recorded preferences. Nutrition panels are inherited qualitative ingredient-source notes, not calculated intake or an assessment of dietary adequacy. Suggested future experiments are distinguished from tested personal observations.

## Storage and access

The schema is in db/schema.ts; generated schema-only migrations are in drizzle/. lib/kitchen.ts contains typed seed content and data helpers. app/api/kitchen/route.ts reads/writes one versioned D1 document. Writes use compare-and-swap revision checks, JSON validation and origin checks. The shared notebook relies on the Sites owner-private access boundary; preserve that audience. Do not make the Site public without Darren’s explicit approval and an access review.

## Validation

`node tests/verify.mjs` checks recipe search/filters, quantities, shopping deduplication, content provenance counts, backup schema, API persistence and concurrency with SQLite, origin rejection, responsive CSS contracts and React initial rendering. `node node_modules/typescript/bin/tsc --noEmit` checks types. Build through the Sites build helper.

Full visual/browser QA was unavailable in the authoring session because the managed browser-control skill was not available. CSS contracts and server rendering do not replace real-device testing.

## GitHub source snapshot

Private live kitchen: https://darrens-kitchen-rotation.dazspruce.chatgpt.site

This directory preserves the app source separately from the public GitHub Pages files at the repository root. Runtime data, access tokens, Site identity and personal backups are not included. The `.openai/hosting.json` copy declares storage bindings only. The canonical deployed Site keeps its existing identity and owner-only audience.

For source changes, update the existing Site through Sites using the live URL above; do not create a replacement Site or change its audience. Copy reviewed changes back here when you want a GitHub snapshot. Committing here does not automatically deploy the Site.

Everyday recipe and notebook changes can be made inside the app without rebuilding. Those edits save to its private database, not this public GitHub repository. Use Download backup for a private copy; do not commit personal backups. Publishing selected recipe changes to the public collection is a separate action.

### Local development

Requires Node.js 22.13 or later and pnpm 10.

```sh
cd site
pnpm install --frozen-lockfile
pnpm run dev
```

The standalone project defaults to portable development settings; hosted access is still managed by Sites. For full D1 functionality, generate build metadata with `pnpm run build`, then apply the included migration to the local database:

```sh
node --import ./scripts/sites-env.mjs ./node_modules/wrangler/bin/wrangler.js d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file drizzle/0000_perfect_genesis.sql
```

Apply each local migration only once. Hosted and local data are separate. Run the app checks with `node tests/verify.mjs` and `pnpm exec tsc --noEmit`.
