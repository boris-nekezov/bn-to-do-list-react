# PROJECT PLAN


## 1. Make a screenshot of the app

![](screenshot.jpg)
    
## 2. Separate visually the components

![](components.jpg)

## 3. Name the components

- ToDoList
- Header
- HeaderTitle
- HeaderTaskAdd
- ToDoListItems
- ToDoListItem
- ToDoListItemTitle
- ToDoListItemEditMode
- Button
- Icon
- Input
- Checkbox

## 4. Create Hierarchy structure

- `<ToDoList />`
  - `<Header />`
    - `<HeaderTitle />`
    - `<HeaderTaskAdd />`
      - `<Button />` (Add button)
        - `<Icon />` (Plus icon)
      - `<Input />`
  - `<ToDoListItems />`
    - `<ToDoListItem />`
      - `<Checkbox />`
      - `<ToDoListItemTitle />`
        - `<ToDoListItemEditMode />`
          - `<Button />` (Save button)
          - `<Button />` (Cancel button)
      - `<Button />` (Edit button)
        - `<Icon />` (Edit icon)
      - `<Button />` (Delete button)
        - `<Icon />` (Trash icon)

## 5. Folder structure

- [`components`]
  - [`Header`]
    - Header.jsx
    - [`HeaderTitle`]
      - HeaderTitle.jsx
    - [`HeaderTaskAdd`]
      - HeaderTaskAdd.jsx
  - [`ToDoListItems`]
    - ToDoListItems.jsx
    - [`ToDoListItem`]
      - ToDoListItem.jsx
      - [`ToDoListItemTitle`]
        - ToDoListItemTitle.jsx
        - [`ToDoListItemEditMode`]
          - ToDoListItemEditMode.jsx
  - [`UI`]
    - [`Button`]
      - Button.jsx
    - [`Icon`]
      - Icon.jsx
    - [`Input`]
      - Input.jsx
    - [`Checkbox`]
      - Checkbox.jsx
- [`containers`]
  - [`ToDoList`]
    - ToDoList.jsx
