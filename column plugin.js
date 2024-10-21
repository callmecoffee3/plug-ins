column plugin
// Column Plugin

// Plugin metadata
export const plugin = {
  name: 'Column Plugin',
  description: 'Adds custom columns',
  version: '1.0.0',
};

// Column functionality
export function columnPlugin(bot) {
  // Story Title Column
  bot.columns.register({
    name: 'story-title',
    description: 'Display story title',
    callback: (args) => {
      return args.story.title;
    },
  });

  // Chapter Count Column
  bot.columns.register({
    name: 'chapter-count',
    description: 'Display chapter count',
    callback: (args) => {
      return args.story.chapters.length;
    },
  });

  // Author Column
  bot.columns.register({
    name: 'author',
    description: 'Display author name',
    callback: (args) => {
      return args.story.author;
    },
  });
}

// Plugin initialization
export function init(bot) {
  columnPlugin(bot);
}
``)


This plugin includes:


1. Plugin metadata (name, description, version)
2. Three custom columns:
	* Story Title
	* Chapter Count
	* Author
3. Initialization function


**Column Structure**


* `name`: column name
* `description`: column description
* `callback`: column logic


**Column Logic**


* `args.story.title`: displays story title
* `args.story.chapters.length`: displays chapter count
* `args.story.author`: displays author name


**Usage**


1. Save this code as `column-plugin.js`
2. Upload to GitHub or your website
3. Install plugin in Matt Code chatbot
4. Use `!column` command to display columns


Would you like:


1. Add more columns?
2. Modify column logic?
3. Create custom column types? 


Here are some additional column ideas:


1. Genre Column
2. Rating Column
3. Tags Column
4. Description Column
5. Image Column


Please let me know if you'd like to add any of these columns or create custom ones.