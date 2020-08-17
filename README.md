# Notes App 

## Deployment Link

## Description 

## Aims 

## How to use

## Images 

## Install

## My process 
### Structure
### Approach
### Dependancies 



## Plan:
### User Stories: 

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are

As a busy politiciann 
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story

As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story

As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at

As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks

As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```




### Domain Model:

Object | Message 
|------|-------|
|Model |       |
|      | constructor - take in webTitle |
||       returnHeadline |
|ListModel | |
||          .add(Headline) | 
||          .return |
### Model:
Takes the info and return the relevant information 

### View: 
Adds the html and layout

input| output
----|------
data.webtitle | <h1>"This is a webtitle"</h1>

### Controller: 
Takes the output of the model and gives to the view 
Takes the output of the view and returns it to the page 
Have a hash changer 

/// list model - add / return
/// controller - takes in a view - adds html - iterates over the  list model 