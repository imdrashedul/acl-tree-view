# ACL jQuery Tree View
- jquery based tree view including accordion
- Remote parsing supported via Ajax
- refresh specific element from server-side based on changes
- JSON source supported

![https://mrashedulislam.com/acl-treeview.jpg](https://mrashedulislam.com/acl-treeview.jpg)

**Install**
-----------

``npm install``

**Run Build**
-------------

``gulp build``

**Basic Eaxmple**
```
$(parentContainer).aclTreeView({ callback: function(event, $elem, params) {
    // DO STUFF WHEN CLICK FIRED ON EACH ELEMENT
}}, [
      {
          label : 'Mail',
          icon : 'far fa-envelope-open',
          ul : [
              { label : 'Offers', icon : 'far fa-bell', },
              { label : 'Contacts', icon : 'far fa-address-book' },
              { 
                  label : 'Calendar', 
                  icon : 'far fa-calendar-alt', 
                  ul : [
                      { label : 'Deadlines', icon : 'far fa-clock' },
                      { label : 'Meetings', icon : 'fas fa-users' },
                      { label : 'Workouts', icon : 'fas fa-basketball-ball' },
                      { label : 'Events', icon : 'fas fa-mug-hot' },
                  ]
              }
          ]
      },
      {
          label : 'Inbox',
          icon : 'far fa-folder-open',
          description: 'This is a description',
          ul : [ 
              { label : 'Admin', icon : 'far fa-folder-open', description: 'This is a description', href: 'http://google.com' },
              { label : 'Corporate', icon : 'far fa-folder-open' },
              { label : 'Finance', icon : 'far fa-folder-open' },
              { label : 'Other', icon : 'far fa-folder-open' }
          ]
      },
      {
          label : 'Favourites',
          icon : 'far fa-gem',
          ul : [ 
              { label : 'Restaurants', icon : 'fas fa-pepper-hot' },
              { label : 'Places', icon : 'far fa-eye' },
              { label : 'Games', icon : 'fas fa-gamepad' },
              { label : 'Coctails', icon : 'fas fa-cocktail' },
              { label : 'Food', icon : 'fas fa-pizza-slice' }
          ]
      },
      { label : 'Notes', icon : 'fas fa-cogs' },
      { label : 'Settings', icon : 'fas fa-desktop' },
      { label : 'Sevices', icon : 'fas fa-trash' } 
]);
```
