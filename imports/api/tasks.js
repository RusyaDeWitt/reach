import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'tasks.insert'(title, url, questionsNum, question1, firstAnswer1, secondAnswer1, thirdAnswer1, question2, firstAnswer2, secondAnswer2, thirdAnswer2, question3, firstAnswer3, secondAnswer3, thirdAnswer3, question4, firstAnswer4, secondAnswer4, thirdAnswer4, question5, firstAnswer5, secondAnswer5, thirdAnswer5, question6, firstAnswer6, secondAnswer6, thirdAnswer6, question7, firstAnswer7, secondAnswer7, thirdAnswer7, question8, firstAnswer8, secondAnswer8, thirdAnswer8, question9, firstAnswer9, secondAnswer9, thirdAnswer9, question10, firstAnswer10, secondAnswer10, thirdAnswer10) {

    // Make sure the user is logged in before inserting a task
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.insert({
      title,
      url,
      questionsNum,
      question1,
      firstAnswer1,
      secondAnswer1,
      thirdAnswer1,
      question2,
      firstAnswer2,
      secondAnswer2,
      thirdAnswer2,
      question3,
      firstAnswer3,
      secondAnswer3,
      thirdAnswer3,
      question4,
      firstAnswer4,
      secondAnswer4,
      thirdAnswer4,
      question5,
      firstAnswer5,
      secondAnswer5,
      thirdAnswer5,
      question6,
      firstAnswer6,
      secondAnswer6,
      thirdAnswer6,
      question7,
      firstAnswer7,
      secondAnswer7,
      thirdAnswer7,
      question8,
      firstAnswer8,
      secondAnswer8,
      thirdAnswer8,
      question9,
      firstAnswer9,
      secondAnswer9,
      thirdAnswer9,
      question10,
      firstAnswer10,
      secondAnswer10,
      thirdAnswer10,
      private: true,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);

    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Tasks.remove(taskId);
  },
  'tasks.setPrivate'(taskId, setToPrivate) {
  check(taskId, String);
  check(setToPrivate, Boolean);

  const task = Tasks.findOne(taskId);

  // Make sure only the task owner can make a task private
  if (task.owner !== this.userId) {
    throw new Meteor.Error('not-authorized');
  }

  Tasks.update(taskId, { $set: { private: setToPrivate } });
  },
});
