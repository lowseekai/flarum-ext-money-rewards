import Model from 'flarum/common/Model';
import Post from 'flarum/common/models/Post';
import User from 'flarum/common/models/User';

export default class Reward extends Model {
    amount = Model.attribute('amount')
    newMoney = Model.attribute('newMoney')
    comment = Model.attribute('comment')
    createdAt = Model.attribute('createdAt', Model.transformDate)
    post = Model.hasOne<Post>('post')
    giver = Model.hasOne<User>('giver')
    receiver = Model.hasOne<User>('receiver')
}
