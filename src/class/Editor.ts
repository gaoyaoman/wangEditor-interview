interface MenuItem {
  label: string;
  name: string;
  options: [] | any
}

function menuItemHandler(menuItem: MenuItem): DocumentFragment {
  const {label, name, options} = menuItem;
  let container = document.createDocumentFragment()
  for (let item of options.values()) {
    let menuItem = document.createElement('div');
    menuItem.innerHTML = item.name;
    menuItem.dataset.value = item.value;
    container.appendChild(menuItem);
  }
  return container;
}

function initMenu(menus: MenuItem[]): HTMLElement {
  const menu: HTMLDivElement | null = document.createElement('div');
  menu.id = 'editor__menu';
  let item = document.createElement('div');
  for (let menuItem of menus) {
    item.appendChild(menuItemHandler(menuItem))
  }
  menu.appendChild(item)
  return menu;
}

function initBody(): HTMLElement {
  const body: HTMLDivElement | null = document.createElement('div');
  body.id = 'editor__Body';

  return body;
}

class Editor {
  //dom id
  private readonly id: string;
  //焦点最后的位置
  private lastAddress: string;
  //菜单配置项
  private readonly menu: MenuItem[];

  constructor(id: string) {
    this.id = id
    this.lastAddress = ''
    this.menu = [
      {
        label: 'Bold',
        name: 'BOLD',
        options: []
      },
      {
        label: 'Title',
        name: 'FONT_SIZE',
        options: [
          {
            name: 'H1',
            value: '6'
          },
          {
            name: 'H2',
            value: '5'
          },
          {
            name: 'H3',
            value: '4'
          },
          {
            name: 'H4',
            value: '3'
          },
          {
            name: 'H5',
            value: '2'
          },
          {
            name: 'H6',
            value: '1'
          }
        ]
      },
      {
        label: 'Color',
        name: 'COLOR',
        options: [
          {
            name: 'red',
            value: '#FF0000'
          },
          {
            name: 'green',
            value: '#00FF00'
          },
          {
            name: 'blue',
            value: '#0000FF'
          },
        ]
      },
    ]
  }

  init() {
    if (!this.id) {
      throw new Error('未传入初始化元素id');
    }

    const editor = document.getElementById(this.id);
    const menu = initMenu(this.menu)
    const body = initBody()

    if (editor) {
      editor.appendChild(menu)
      editor.appendChild(body)
    }
  }

}

export default Editor
