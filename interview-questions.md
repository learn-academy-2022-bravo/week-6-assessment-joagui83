# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: create a migration file to add foreign id(student_id) column. Or drop the whole table and start over.  

  Researched answer: Generate a column in your controller file then migrated so that it shows up in your schema. Delete the model and start from scratch adding your inheritance relations to decide wich is the primary key and where will the foreign key be assigned. 



2. Which RESTful routes must always be passed params? Why?

  Your answer: Routes where you have to updata/edit delete/destroy data

  Researched answer: when the .find input is required to complete a destroy or an update action. Along with show route to filter out a certain data point. 



3. Name three rails generator commands. What is created by each?

  Your answer:rails g migration it allows you to make a change to the database shown on the schema.
  rails g model creates a table
  rails g resources creates the routes you will need 


  Researched answer: rails g migration creates a file where you're allowed to edit the data type, add/remove columns, or edit a columns name among other things. It is most practical in  to accommodate changes in databases due to new database needs. 
  rails g model- Is an action model that creates the table needed to run your columsn rows inheritance relations(primary keys, foreign keys).
  rails g resources helps with simplifying your routes creation so there is no confusion 



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students          
students#index will show all students
action: "POST"   location: /students       
students#create create to make a new entry 
action: "GET"    location: /students/new
studens#new creates the new form for an editable entry for student #2 
action: "GET"    location: /students/2  
students#show it will show the id at the end of the path url(param) for student # 2
action: "GET"    location: /students/2/edit    
students#edit generates a rendering for the student editable form for student # 2
action: "PATCH"  location: /students/2      
students#update creates the update for the edit and new actions for student # 2
action: "DELETE" location: /students/2      
students#delete will delete student # 2



5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

As a user, create a ReadMe.md file to explain your methodology and steps to creating your app.
As a user, I can create a to-do list.
As a user, I can add tasks to my list.
As a user, I can set my task as incomplete initially.
As a user, I can change the task to completed.
As a user, I can create a priority sub list.
As a user, I can decide what task I want to prioritize.
As a user, I can delete my priority list once completed.
As a user, I can style my list.
As a user, I can reset a task or the whole list once completed.