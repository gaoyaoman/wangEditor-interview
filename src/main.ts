import Editor from "./class/Editor";
import './css/style.scss'

const DOM_ID: string = 'editor'
const editor: Editor = new Editor(DOM_ID)

editor.init()
