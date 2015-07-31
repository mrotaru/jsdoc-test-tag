exports.handlers = {
  newDoclet: function(e) {
//    console.log(e.doclet.meta);
  }
};

exports.defineTags = function( dictionary ) {
  dictionary.defineTag( 'test', {
    mustHaveValue: false,
    canHaveType: false,
    canHaveName: false,
    onTagged: function( doclet, tag ) {
      if(doclet.meta.code.id) {
        console.log(tag);
      }
    }
  });
};
