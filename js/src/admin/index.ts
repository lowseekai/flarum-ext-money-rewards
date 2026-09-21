import app from 'flarum/admin/app';

app.initializers.add('lowseekai-money-rewards', () => {
    app.registry
        .for('lowseekai-money-rewards')
        .registerSetting({
            type: 'text',
            setting: 'money-rewards.preselection',
            label: app.translator.trans('lowseekai-money-rewards.admin.settings.preselection'),
        })
        .registerSetting({
            type: 'number',
            setting: 'money-rewards.min',
            label: app.translator.trans('lowseekai-money-rewards.admin.settings.min'),
            min: 0,
        })
        .registerSetting({
            type: 'number',
            setting: 'money-rewards.max',
            label: app.translator.trans('lowseekai-money-rewards.admin.settings.max'),
            min: 0,
        })
        .registerPermission({
            permission: 'money-rewards.seeMoneyRewardHistory',
            icon: 'fas fa-coins',
            label: app.translator.trans('lowseekai-money-rewards.admin.permissions.seeMoneyRewardHistory'),
            allowGuest: true,
        }, 'view')
        .registerPermission({
            permission: 'discussion.rewardPostsWithMoney',
            icon: 'fas fa-coins',
            label: app.translator.trans('lowseekai-money-rewards.admin.permissions.rewardWithMoney'),
        }, 'reply')
        .registerPermission({
            permission: 'money-rewards.customAmounts',
            icon: 'fas fa-coins',
            label: app.translator.trans('lowseekai-money-rewards.admin.permissions.customAmounts'),
        }, 'reply')
        .registerPermission({
            permission: 'money-rewards.createMoney',
            icon: 'fas fa-coins',
            label: app.translator.trans('lowseekai-money-rewards.admin.permissions.createMoney'),
        }, 'moderate');
});
