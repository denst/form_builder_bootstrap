define(function(require) {
  var formname               = require('text!templates/snippet/formname.html')
  , prependedtext            = require('text!templates/snippet/prependedtext.html')
  , search                   = require('text!templates/snippet/searchinput.html')
  , textinput                = require('text!templates/snippet/textinput.html')
  , button                   = require('text!templates/snippet/button.html')
  , multiplecheckboxes       = require('text!templates/snippet/multiplecheckboxes.html')
  , multiplecheckboxesinline = require('text!templates/snippet/multiplecheckboxesinline.html')
  , multipleradios           = require('text!templates/snippet/multipleradios.html')
  , multipleradiosinline     = require('text!templates/snippet/multipleradiosinline.html')
  , selectbasic              = require('text!templates/snippet/selectbasic.html')
  , selectmultiple           = require('text!templates/snippet/selectmultiple.html')
  , textarea                 = require('text!templates/snippet/textarea.html')
  , textinput                = require('text!templates/snippet/textinput.html')
  , slider                   = require('text!templates/snippet/slider.html')
  , fioinput                 = require('text!templates/snippet/fioinput.html')
  , companyinput             = require('text!templates/snippet/companyinput.html')
  , phoneinput               = require('text!templates/snippet/phoneinput.html')
  , emailinput               = require('text!templates/snippet/emailinput.html')
  , buttonstep               = require('text!templates/snippet/buttonstep.html')
  , buttonsubmit             = require('text!templates/snippet/buttonsubmit.html')
  , startstep                = require('text!templates/snippet/startstep.html')
  , endstep                  = require('text!templates/snippet/endstep.html')
  , filebutton               = require('text!templates/snippet/filebutton.html')
  , stepscript               = require('text!templates/snippet/stepscript.html');

  return {
    formname                   : formname
    , prependedtext            : prependedtext
    , search                   : search
    , textinput                : textinput
    , singlebutton             : button
    , multiplecheckboxes       : multiplecheckboxes
    , multiplecheckboxesinline : multiplecheckboxesinline
    , multipleradios           : multipleradios
    , multipleradiosinline     : multipleradiosinline
    , selectbasic              : selectbasic
    , selectmultiple           : selectmultiple
    , textarea                 : textarea
    , textinput                : textinput
    , slider                   : slider
    , fioinput                 : fioinput
    , companyinput             : companyinput
    , phoneinput               : phoneinput
    , emailinput               : emailinput
    , buttonstep               : buttonstep
    , buttonsubmit             : buttonsubmit
    , startstep                : startstep
    , endstep                  : endstep
    , filebutton               : filebutton
    , stepscript               : stepscript
  }
});
