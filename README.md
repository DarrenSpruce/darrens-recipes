# Darren’s Recipes

My international recipe rotation and cooking knowledge: meals I cook, taste and refine over time.

## Open the kitchen

- **[Darren’s Kitchen — private interactive app](https://darrens-kitchen-rotation.dazspruce.chatgpt.site)**: sign in with Darren’s authorised ChatGPT account. Recipe editing, search, ingredients, cooking instructions, shopping checkboxes, cook-next bookmarks, cooking logs, kitchen notes and backups.
- **[Public recipe collection](https://darrenspruce.github.io/darrens-recipes/)**: the existing shareable collection, including access for family.
- **[Public kitchen notebook](https://darrenspruce.github.io/darrens-recipes/notebook.html)**: sourdough and starter methods.

The new app remains owner-private. This repository is public; storing its source here does not grant access to the private app or its database.

## What lives where

| Path | Purpose |
| --- | --- |
| `recipes.json` | Public recipe collection used by GitHub Pages, including quantities, methods, adjustments and qualitative nutrient-source notes |
| `cooking-history.json` | Previously published cooking reports; report dates are distinguished from unknown cooking dates |
| `index.html` | Existing public recipe browser |
| `notebook.html` | Existing public bread notebook |
| `site/` | Source snapshot of the private app: React/Vinext UI, API, D1 schema and migrations, recipe seeds, assets, dependency lockfile and checks |
| `Darrens_Recipes.json` | Original earlier recipe export, retained for reference |

## Updating recipes and knowledge

Use **Add recipe** or **Edit recipe** inside the private app for everyday changes. In **Kitchen notebook**, add or edit reusable methods and observations. After a meal, use **I cooked this** to record a date, taste rating and what you learned. These changes are saved across devices without regenerating or redeploying the whole app. Refresh another device to load the latest copy.

Private app edits, shopping lists and new cooking logs do **not** automatically sync into this public repository. Use **Download backup** for a private JSON backup; keep personal backups out of GitHub. To publish selected recipes for family, update `recipes.json` deliberately. The public collection and the private kitchen are separate data copies.

For application code changes, see [site/README.md](site/README.md). No automatic deployment or public access change is configured by this repository update. Keep the existing Site private unless Darren explicitly approves a change.

## Cooking notes and nutrition

The collection preserves tested preferences such as two tins of black beans for fajitas, lime at the end, thoroughly browned tofu, drained frozen beans, longer cooking for cavolo nero, and adding traybake chicken after the vegetables. The Persian chicken method now incorporates a more generous sauce: **150–200 ml stock is explicitly a proposed working amount**, rather than a quantity measured in a previous batch.

The private notebook also collects bread methods, flavour and texture lessons, and ideas for future experiments. Existing nutrition panels describe likely nutrient sources; they do not calculate intake or prove dietary completeness.

## Verification

Automated checks cover search and filters, original ingredient quantities, shopping deduplication, API save/load, recipe and note edits, cooking logs, conflict protection, invalid data and origin rejection, React rendering and responsive CSS rules. Type checking and the production build passed. The private deployment’s page, data API, saved seed collection and anonymous-access restriction were verified.

Visual phone and desktop browser testing was unavailable during the initial build and remains unverified.
