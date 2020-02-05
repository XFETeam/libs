module.exports = {
  getQuestions() {
    return [
      {
        name: 'projectName',
        message: '请输入项目名, 如: @xfe-team/test: ',
        default: '@xfe-team/untitle'
      },
      {
        name: 'projectDescription',
        message: '请输入项目描述: ',
        default: '暂无'
      },
      {
        name: 'author',
        message: '请输入项目作者: ',
        default: '匿名'
      },
      {
        name: 'repository',
        message: '请输入 git 地址 (选填): ',
        default: ''
      }
    ];
  }
};
