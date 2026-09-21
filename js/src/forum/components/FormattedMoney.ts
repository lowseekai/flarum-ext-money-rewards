import app from 'flarum/forum/app';
import Component, {ComponentAttrs} from 'flarum/common/Component';

interface MoneyFormatAttrs extends ComponentAttrs {
    money: number
}

export default class FormattedMoney extends Component<MoneyFormatAttrs> {
    view() {
        const currencyName = app.forum.attribute<string>('pointSystem.currency_name') || '积分';

        return m('span', `${this.attrs.money} ${currencyName}`);
    }
}
