[![Build Status](https://travis-ci.org/jorgeme0996/chat-bot.svg?branch=master)](https://travis-ci.org/jorgeme0996/chat-bot)

# \<chat-bot\>

```html
<chat-bot></chat-bot>
```

## Install bower
npm i bower

## Run bower install

```
$ bower install
```

## Class Polymer.Node

This class is declare in models directory.

|Propertie    | Value     | Description                                                            |
|-----------    |-----------|------------------------------------------------------------------------|
|question       |Satring    |This id the text of the node that would be shown.                       |
|options        |Map        |This are the options that the bot will show on buttons. and have the reference to the  *Node* selected |
|from           |String     |This always is going to be bot                                          | 
|isFinal        |Boolean    |Is going to be false for defaul. Only true when your node is a Final response | 
|