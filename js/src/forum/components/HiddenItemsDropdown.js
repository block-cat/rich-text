import Dropdown from 'flarum/components/Dropdown';
import icon from 'flarum/helpers/icon';
import SafariModalHack from './SafariModalHack';

export default class HiddenItemsDropdown extends Dropdown {
  static initAttrs(attrs) {
    attrs.buttonClassName = 'Button Button--icon Button--link Button--menuDropdown';
  }

  oninit(vnode) {
    super.oninit(vnode);

    this.state = this.attrs.state;
  }

  oncreate(vnode) {
    super.oncreate(vnode);

    this.$().on('click', (e) => {
      if ($('.App').is('.mobile-safari')) {
        // Mobile Safari doesn't support fixed items
        // So, we wrap them in a modal.
        app.modal.show(SafariModalHack, {
          title: this.attrs.tooltip,
          vnodeContent: this.attrs.buttons.map((button) => {
            return button;
          }),
        });
        e.stopPropagation();
      }
    });

    this.$('[data-toggle="tooltip"]').tooltip();
  }

  getButtonContent(children) {
    return (
      <span data-toggle="tooltip" title={this.attrs.tooltip}>
        {icon(this.attrs.icon)}
      </span>
    );
  }

  getMenu(items) {
    return <ul className={'Dropdown-menu dropdown-menu AlignText'}>{this.attrs.buttons}</ul>;
  }
}