# Darren’s Recipes

My international recipe rotation and cooking notebook: meals I cook, taste and refine over time.

## Open the kitchen

- **[Darren’s Kitchen — private interactive app](https://darrens-kitchen-rotation.dazspruce.chatgpt.site)**: recipe browsing and editing, search, quantities, cooking instructions, shopping checkboxes, cook-next bookmarks, cooking logs, kitchen notes and backups. Access requires Darren’s authorised account.
- **[Public recipe collection](https://darrenspruce.github.io/darrens-recipes/)**: the existing collection remains available to share with family.
- **[Public kitchen notebook](https://darrenspruce.github.io/darrens-recipes/notebook.html)**: the existing published notebook.

The hosted app remains private. Linking to it here does not grant access or change its audience.

## Everyday updates

In the private app, choose **Add recipe** or **Edit recipe** to change ingredients, quantities, full instructions and cooking notes. Use **Kitchen notebook** for reusable methods and observations. Use **I cooked this** to record a date, taste rating and what you learned. These edits save without rebuilding the site. Refresh another device to load the latest saved copy.

Private app edits, shopping lists and new cooking logs do **not** automatically sync to this public repository. Use **Download backup** for a private JSON backup and **Restore backup** to restore a saved copy. Keep private backups out of this public repository.

## Public collection files

| File | Purpose |
| --- | --- |
| `index.html` | Public recipe browser |
| `recipes.json` | Public recipe quantities, instructions, adjustments and ingredient-based nutrition notes |
| `cooking-history.json` | Previously published cooking reports; report dates are distinct from unknown cooking dates |
| `notebook.html` | Public kitchen notebook |
| `Darrens_Recipes.json` | Earlier recipe export retained for reference |

To update the public family collection, deliberately edit `recipes.json` or `notebook.html`. Changes here and changes in the private app are separate. This repository update adds the new link and maintenance documentation; it does not publish the app’s source or private database onto the main branch, configure automatic deployment, or change Site access.

Nutrition panels describe likely ingredient sources rather than calculated daily intake or a guarantee of dietary completeness.
