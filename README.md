# stream-nlp

Rewrite of the vui-ad-hoc-alexa-recognizer to cleanup the code and add NLP processing of streamed text.

Many of the changes will be breaking changes from vui-ad-hoc-alexa-recognizer and will require some updates to configration files and code.

At present this is just a skeleton project so you should continue to use vui-ad-hoc-alexa-recognizer until it's deprecated in favor of stream-nlp

Intended improvements:
* combining intents and utterances into a single configuration in json format. Having this in json format will make it much easier to add extra features without worrying about a complicated parser.
* expanding the domains functionality
* adding streaming functionality to allow continuous NLP processing of text as it comes in. this is the single most important feature and justifies the name change as well as the future deprecation of vui-ad-hoc-alexa-recognizer
* adding machine learning capability at the edge