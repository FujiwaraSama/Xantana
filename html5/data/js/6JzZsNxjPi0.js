window.globalProvideData('slide', '{"title":"Sebuah lapangan persegi panjang memiliki luas 768 m2 dengan panjang 32 m. Hitunglah diagonal bidang dari lapangan tersebut…","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide2","width":1024,"height":768,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6JzZsNxjPi0","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"6Cfv9gLayhD.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6ecVZtterAo"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6qzq7MEPQx3.InvalidPromptSlide"}}]}]},"ReviewInt_68Mz0A6Sq00":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Cfv9gLayhD"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68Mz0A6Sq00_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68Mz0A6Sq00_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_68Mz0A6Sq00":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68Mz0A6Sq00_ReviewShape"}}]},"AnsweredInt_68Mz0A6Sq00":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_68Mz0A6Sq00"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_68Mz0A6Sq00":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"6Cfv9gLayhD"},"enabled":{"type":"boolean","value":false}}]},"68Mz0A6Sq00_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6GW90cUt9IY","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_68Mz0A6Sq00"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6ecVZtterAo.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_68Mz0A6Sq00"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6JzZsNxjPi0":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6JzZsNxjPi0":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_68Mz0A6Sq00","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"incomplete","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_RetryModeFirstSlideJump","typea":"var","valueb":false,"typeb":"boolean"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.5o477yt1XHp_RetryModeFirstSlideJump","operator":"set","value":{"type":"boolean","value":true}},{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[{"kind":"adjustvar","variable":"_player.5o477yt1XHp_RetryModeFirstSlideJump","operator":"set","value":{"type":"boolean","value":true}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"incomplete","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"adjustvar","variable":"_player.6JzZsNxjPi0_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":true}}],"elseActions":[{"kind":"adjustvar","variable":"_player.6JzZsNxjPi0_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":false}}]}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qzq7MEPQx3","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6qzq7MEPQx3","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.5o477yt1XHp_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#5o477yt1XHp_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_68Mz0A6Sq00"}]},{"kind":"showtimer","id":"_player.5o477yt1XHp_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6GW90cUt9IY","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_68Mz0A6Sq00"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6GW90cUt9IY","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_68Mz0A6Sq00"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5o477yt1XHp.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_68Mz0A6Sq00"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"68Mz0A6Sq00_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_68Mz0A6Sq00","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_68Mz0A6Sq00","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6JzZsNxjPi0"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6JzZsNxjPi0"}]},{"kind":"onbeforeslidejump","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6GW90cUt9IY","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_player.#6JzZsNxjPi0_RetryModeInteractionIncompleteOnLoad","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"6ecVZtterAo.$Status","typea":"property","valueb":"incorrect","typeb":"string"}]}]}},"thenActions":[{"kind":"cancel_event"},{"kind":"adjustvar","variable":"_player.6JzZsNxjPi0_RetryModeInteractionIncompleteOnLoad","operator":"set","value":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_68Mz0A6Sq00","typea":"var","valueb":"5o477yt1XHp","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5o477yt1XHp"},"completed_slide_ref":{"type":"string","value":"_player.5rXBkXRJWo9.65MTmpxoA1j"},"status_filter":"incomplete"}],"elseActions":[]}]}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5e5oR2ys5Dd"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6cMmJXvlRmX"}},{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"68Mz0A6Sq00_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Cfv9gLayhD"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5Yz3yFRtXou"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":25,"id":"01","url":"story_content/6lhx94xHk6j_80_DX2048_DY2048.swf","type":"normal","altText":"Evaluasi.png","width":1024,"height":768,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":384,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1024,"bottom":768,"altText":"Evaluasi.png","pngfb":false,"pr":{"l":"Lib","i":89}},"html5data":{"xPos":0,"yPos":0,"width":1024,"height":768,"strokewidth":0}},"width":1024,"height":768,"resume":true,"useHandCursor":true,"id":"5e5oR2ys5Dd"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6cMmJXvlRmX_-444296545","id":"01","linkId":"txt__default_6cMmJXvlRmX","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":920,"bottom":149,"pngfb":false,"pr":{"l":"Lib","i":506}}}],"shapemaskId":"","xPos":64,"yPos":152,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":461,"rotateYPos":76.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":922,"bottom":153,"altText":"Sebuah lapangan persegi panjang memiliki luas 768 m2 dengan panjang 32 m. Hitunglah diagonal bidang dari lapangan tersebut…","pngfb":false,"pr":{"l":"Lib","i":505}},"html5data":{"xPos":0,"yPos":0,"width":922,"height":153,"strokewidth":0}},"width":922,"height":153,"resume":true,"useHandCursor":true,"id":"6cMmJXvlRmX"},{"kind":"textinput","bindto":"_player.TextEntry","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"placeholder":"Ketik jawaban di sini …","fontsize":23,"textcolor":"0x000000","bold":false,"italic":false,"font":"Open Sans Charset0_v9TY33EDE6F2","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":72,"yPos":320,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":439.5,"rotateYPos":14.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6Cfv9gLayhD","linkId":"","type":"vectortext","xPos":10,"yPos":5,"width":860,"height":30,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":156,"bottom":21,"pngfb":false,"pr":{"l":"Lib","i":508}}},"html5data":{"xPos":0,"yPos":0,"width":880,"height":30,"strokewidth":1}},"width":880,"height":30,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":-1,"top":-1,"right":881,"bottom":31,"altText":"Ketik jawaban di sini …","pngfb":false,"pr":{"l":"Lib","i":507}}},"id":"6Cfv9gLayhD","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5Yz3yFRtXou_559434130","id":"01","linkId":"txt__default_5Yz3yFRtXou","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":282,"bottom":57,"pngfb":false,"pr":{"l":"Lib","i":105}}}],"shapemaskId":"","xPos":64,"yPos":40,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":380,"rotateYPos":30.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":760,"bottom":61,"altText":"SOAL EVALUASI","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":0,"yPos":0,"width":760,"height":61,"strokewidth":0}},"width":760,"height":61,"resume":true,"useHandCursor":true,"id":"5Yz3yFRtXou"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"68Mz0A6Sq00_CorrectReview","id":"01","linkId":"68Mz0A6Sq00_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":554,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":502}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":501}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"68Mz0A6Sq00_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"68Mz0A6Sq00_IncorrectReview","id":"01","linkId":"68Mz0A6Sq00_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":563,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":504}}}],"shapemaskId":"","xPos":0,"yPos":728,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":512,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1024,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":503}},"html5data":{"xPos":1,"yPos":1,"width":1021,"height":37,"strokewidth":2}},"width":1024,"height":40,"resume":false,"useHandCursor":true,"id":"68Mz0A6Sq00_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_68Mz0A6Sq00_ReviewShape","id":"01","linkId":"txt_68Mz0A6Sq00_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":260,"bottom":436,"pngfb":false,"pr":{"l":"Lib","i":510}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":460.5,"rotateYPos":301.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":1004,"bottom":440,"altText":"","pngfb":false,"pr":{"l":"Lib","i":509}},"html5data":{"xPos":1,"yPos":1,"width":1002,"height":438,"strokewidth":1}},"width":921,"height":603,"resume":false,"useHandCursor":true,"id":"68Mz0A6Sq00_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');