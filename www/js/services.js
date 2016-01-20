angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array
  // Some fake testing data
  var chats = [{
    id: 0,
    name: '张三',
    lastText: '张三是我的闺蜜',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: '李四',
    lastText: '李四是我的家人',
    face: 'img/max.png'
  }, {
    id: 2,
    name: '王五',
    lastText: '王五是我的大学同学',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: '赵六',
    lastText: '赵六是我的同事',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: '李七',
    lastText: '李七是我的同事',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
