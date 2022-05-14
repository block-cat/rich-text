import { extend } from 'flarum/extend';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import TextEditor from 'flarum/components/TextEditor';

import HiddenItemsDropdown from './components/HiddenItemsDropdown';

app.initializers.add('block-cat/rich-text', () => {
  extend(require('@askvortsov-rich-text').components.ProseMirrorMenu.prototype, 'items', function(items) {
    const state = this.attrs.state;
    // console.log(state);
    // state.editorView._root.defaultView.app.composer.body.attrs.post.editedContent = ' TikTak';
    // state.editorView._root.defaultView.app.composer.editor.attrs.value = ' TikTak';

    if (items.has('code')) {
      items.remove('code');
    }

    const buttons = new ItemList();
    const textEditor = app.session.user.preferences().useRichTextEditor ?
      '.ProseMirror.FormControl.Composer-flexible.TextEditor-editor.Post-body' :
      '';

    buttons.add(
      'center',
      Button.component({
        className: 'Button Button--icon Button--link',
        icon: 'fas fa-align-center',
        onclick: click.bind(this, textEditor, 'center'),
      })
    );

    buttons.add(
      'right',
      Button.component({
        className: 'Button Button--icon Button--link',
        icon: 'fas fa-align-right',
        onclick: click.bind(this, textEditor, 'right'),
      })
    );

    buttons.add(
      'justify',
      Button.component({
        className: 'Button Button--icon Button--link',
        icon: 'fas fa-align-justify',
        onclick: click.bind(this, textEditor, 'justify'),
      })
    );

    items.add(
      'text_align',
      HiddenItemsDropdown.component({
        type: 'text_align',
        icon: 'fas fa-align-left',
        tooltip: 'Select text align',
        state: state,
        buttons: buttons.toArray(),
      }),
      70
    );
  });

  extend(require('@askvortsov-rich-text').components.ProseMirrorMenu.prototype, 'hiddenItems', function(items) {
    const state = this.attrs.state;
    const modifierKey = this.modifierKey;

    items.add(
      'code',
      require('@askvortsov-rich-text').components.MarkButton.component({
        type: 'code',
        icon: 'fas fa-code',
        tooltip: app.translator.trans('askvortsov-rich-text.forum.composer.code_tooltip', { modifierKey }),
        state: state,
        mark: state.getSchema().marks.code,
      }),
      1
    );
  });
});

function click(textarea, align, e) {
  // var selectedText = '';
  // var caretPosition = 0;
  // var childContent = '';

  // if (window.getSelection) {
  //   selectedText = window.getSelection().toString();
  //   caretPosition = window.getSelection().anchorOffset;
  //   childContent = window.getSelection().anchorNode.parentElement.innerHTML;
  // } else if (document.getSelection) {
  //   selectedText = document.getSelection().toString();
  //   caretPosition = document.getSelection().anchorOffset;
  //   childContent = document.getSelection().anchorNode.parentElement.innerHTML;
  // }

  // // console.log(childContent);
  // // console.log(caretPosition);
  
  // let arrayLen = $(textarea)[0].children.length;
  // let elements = $(textarea)[0].children;
  // for(let i = 0; i < arrayLen; i++) {
  //   if (elements[i].outerText.search(selectedText) !== -1 && elements[i].outerText === childContent) {
  //     if (elements[i].outerText.search(selectedText) == caretPosition) {
  //       // to add bbcode
  //       console.log(elements[i].outerText.search(selectedText));
  //     } else if (elements[i].outerText.search(selectedText) == caretPosition - selectedText.length && elements[i].outerText === childContent) {
  //       // to add bbcode
  //       console.log(elements[i].outerText.search(selectedText));
  //     } else if (elements[i].innerHTML === childContent) {
  //       let start = elements[i].innerHTML.slice(0, caretPosition);
  //       let end = elements[i].innerHTML.slice(caretPosition);

  //       elements[i].innerHTML = start + 'dsdsd' + end;
  //     }
  //   }
  // }


  // console.log($(textarea)[0].children);
  // console.log($(textarea)[0].children.length);

  $(textarea).html() == '<p data-before="Write a Post..." class="placeholder"><br></p>' ?
    $(textarea).html('[' + align + ']  [/' + align + ']') :
    $(textarea).append('[' + align + ']  [/' + align + ']');
}