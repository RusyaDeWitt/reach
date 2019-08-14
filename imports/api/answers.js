import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Answers = new Mongo.Collection('answers');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish answers that are public or belong to the current user
  Meteor.publish('answers', function answersPublication() {
    return Answers.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'answers.insert'(name, title, questionsNum, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10) {

    // Make sure the user is logged in before inserting a answer
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Answers.insert({
      name,
      title,
      questionsNum,
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      answer7,
      answer8,
      answer9,
      answer10,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'answers.remove'(answerId) {
    check(answerId, String);

    const answer = Answers.findOne(answerId);
    if (answer.private && answer.owner !== this.userId) {
      // If the answer is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Answers.remove(answerId);
  },
});
