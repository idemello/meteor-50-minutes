/**
 * Created by idemello on 3/1/17.
 */
Tasks = new Mongo.Collection('tasks');

if(Meteor.isClient){
  Template.tasks.helpers({
    tasks: function(){
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
}

if(Meteor.isServer){

}