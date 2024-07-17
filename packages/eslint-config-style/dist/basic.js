module.exports=[{languageOptions:{parserOptions:{ecmaVersion:"latest"}}},{rules:{"array-bracket-newline":["off",{multiline:true,minItems:4}],"array-bracket-spacing":["warn","always",{singleValue:false,objectsInArrays:true,arraysInArrays:true}],"array-element-newline":["off",{ArrayExpression:"consistent",ArrayPattern:{minItems:3}}],"arrow-parens":["warn","as-needed"],"arrow-spacing":["warn",{before:true,after:true}],"block-spacing":"off","brace-style":"off","comma-dangle":["off",{arrays:"always-multiline",objects:"always-multiline",imports:"never",exports:"never",functions:"never"}],"comma-style":["off","last"],"computed-property-spacing":["off","never"],"dot-location":["off","property"],"eol-last":["warn","always"],"func-call-spacing":["off","never"],"function-call-argument-newline":["off","consistent"],"function-paren-newline":["warn","multiline-arguments"],"generator-star-spacing":["off",{before:false,after:true}],"implicit-arrow-linebreak":["error","beside"],indent:["off",2],"jsx-quotes":["off","prefer-double"],"key-spacing":["off",{beforeColon:false,afterColon:true,mode:"strict"}],"keyword-spacing":["off",{before:true,after:true}],"line-comment-position":["warn",{position:"above"}],"linebreak-style":"off","lines-around-comment":["off",{beforeBlockComment:true}],"lines-between-class-members":["off","always"],"max-len":["off",{code:80,ignoreComments:true,ignoreTrailingComments:true,ignoreUrls:true}],"max-statements-per-line":["warn",{max:1}],"multiline-ternary":["off","always-multiline"],"new-parens":"warn","newline-per-chained-call":["off",{ignoreChainWithDepth:2}],"no-extra-parens":["warn","all",{returnAssign:false,ignoreJSX:"multi-line",nestedBinaryExpressions:false,enforceForArrowConditionals:false}],"no-mixed-spaces-and-tabs":["off","smart-tabs"],"no-multi-spaces":"off","no-multiple-empty-lines":"off","no-tabs":"warn","no-trailing-spaces":"warn","no-whitespace-before-property":"off","nonblock-statement-body-position":["off","beside"],"object-curly-newline":["off",{ObjectExpression:{multiline:true,minProperties:3},ObjectPattern:{multiline:true,minProperties:3},ImportDeclaration:{multiline:true,minProperties:3},ExportDeclaration:{multiline:true,minProperties:1}}],"object-curly-spacing":["off","always",{arraysInObjects:false,objectsInObjects:true}],"object-property-newline":["warn",{allowAllPropertiesOnSameLine:true}],"operator-linebreak":["off","before"],"padded-blocks":["off","never",{allowSingleLineBlocks:false}],"padding-line-between-statements":["warn",{blankLine:"always",prev:"*",next:"return"},{blankLine:"always",prev:"*",next:"export"},{blankLine:"always",prev:["const","let","var"],next:"*"},{blankLine:"any",prev:["const","let","var"],next:["const","let","var"]},{blankLine:"always",prev:"directive",next:"*"},{blankLine:"any",prev:"directive",next:"directive"},{blankLine:"always",prev:["case","default"],next:"*"}],quotes:["off","single",{avoidEscape:true,allowTemplateLiterals:true}],"rest-spread-spacing":["off","never"],semi:["off","always"],"semi-spacing":"off","semi-style":["warn","last"],"space-before-blocks":["off",{functions:"always",keywords:"always",classes:"always"}],"space-before-function-paren":["off",{anonymous:"always",named:"never",asyncArrow:"always"}],"space-in-parens":["warn","never",{exceptions:["{}","[]","()"]}],"space-infix-ops":["off",{int32Hint:false}],"space-unary-ops":["off",{words:true,nonwords:false,overrides:{new:false,"++":true}}],"switch-colon-spacing":"off","template-curly-spacing":"off","template-tag-spacing":["off","never"],"unicode-bom":"error","wrap-iife":["warn","inside",{functionPrototypeMethods:true}],"wrap-regex":"warn","yield-star-spacing":["off","after"]}},{files:["*.tsx","*.jsx","*.ts"],rules:{"max-len":["off",{code:120,ignoreComments:true,ignoreTrailingComments:true,ignoreUrls:true}]}},{files:["*.tsx"],rules:{"jsx-quotes":["warn","prefer-double"]}},{files:["*.tsx","*.jsx"],rules:{"max-lines-per-function":["warn",200],"arrow-parens":["warn","always"]}}];