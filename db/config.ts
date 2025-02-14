import { defineDb, defineTable, column, NOW } from 'astro:db';

const Lead = defineTable({columns:{
  id: column.number({primaryKey: true}),
  name: column.text(),
  email: column.text(),
  tel: column.text(),
  from: column.text(),
  created: column.date({default: NOW}),
}});

const Brief = defineTable({columns: {
  id: column.number({primaryKey: true}),
  title: column.text(),
  description: column.text(),
  message: column.text(),
  budget: column.number(),
  leadId: column.number({references: () => Lead.columns.id}),
  created: column.date({default: NOW}),
}
});

export default defineDb({
  tables: { Lead, Brief }
});
