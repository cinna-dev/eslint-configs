module.exports={parserOptions:{ecmaVersion:"latest"},rules:{"array-bracket-newline":["warn",{multiline:!0,minItems:4}],"array-bracket-spacing":["warn","always",{singleValue:!1,objectsInArrays:!1,arraysInArrays:!0}],"array-element-newline":["warn",{ArrayExpression:"consistent",ArrayPattern:{minItems:3}}],"arrow-parens":["warn","as-needed"],"arrow-spacing":["warn",{before:!0,after:!0}],"block-spacing":"warn","brace-style":"warn","comma-dangle":["warn",{arrays:"always-multiline",objects:"always-multiline",imports:"never",exports:"never",functions:"never"}],"comma-style":["warn","last"],"computed-property-spacing":["warn","never"],"dot-location":["warn","property"],"eol-last":["warn","always"],"func-call-spacing":["warn","never"],"function-call-argument-newline":["warn","consistent"],"function-paren-newline":["warn","consistent"],"generator-star-spacing":["warn",{before:!1,after:!0}],"implicit-arrow-linebreak":["error","beside"],indent:["warn",2],"jsx-quotes":["warn","prefer-double"],"key-spacing":["warn",{beforeColon:!1,afterColon:!0,mode:"strict"}],"keyword-spacing":["warn",{before:!0,after:!0}],"line-comment-position":["warn",{position:"above"}],"linebreak-style":["warn","unix"],"lines-around-comment":["off",{beforeBlockComment:!0}],"lines-between-class-members":["warn","always"],"max-len":["warn",{code:80,ignoreComments:!0,ignoreTrailingComments:!0,ignoreUrls:!0}],"max-statements-per-line":["warn",{max:1}],"multiline-ternary":["warn","always-multiline"],"new-parens":"warn","newline-per-chained-call":["warn",{ignoreChainWithDepth:2}],"no-extra-parens":["warn","all",{returnAssign:!1,ignoreJSX:"multi-line",nestedBinaryExpressions:!1,enforceForArrowConditionals:!1}],"no-mixed-spaces-and-tabs":["warn","smart-tabs"],"no-multi-spaces":"warn","no-multiple-empty-lines":"warn","no-tabs":"warn","no-trailing-spaces":"warn","no-whitespace-before-property":"warn","nonblock-statement-body-position":["warn","beside"],"object-curly-newline":["warn",{ObjectExpression:{multiline:!0,minProperties:3},ObjectPattern:{multiline:!0,minProperties:3},ImportDeclaration:{multiline:!0,minProperties:3},ExportDeclaration:{multiline:!0,minProperties:1}}],"object-curly-spacing":["warn","always",{arraysInObjects:!1,objectsInObjects:!0}],"object-property-newline":"warn","operator-linebreak":["warn","before"],"padded-blocks":["warn","never",{allowSingleLineBlocks:!1}],"padding-line-between-statements":["warn",{blankLine:"always",prev:"*",next:"return"},{blankLine:"always",prev:"*",next:"export"},{blankLine:"always",prev:["const","let","var"],next:"*"},{blankLine:"any",prev:["const","let","var"],next:["const","let","var"]},{blankLine:"always",prev:"directive",next:"*"},{blankLine:"any",prev:"directive",next:"directive"},{blankLine:"always",prev:["case","default"],next:"*"}],quotes:["warn","single",{avoidEscape:!0,allowTemplateLiterals:!0}],"rest-spread-spacing":["warn","never"],semi:["warn","always"],"semi-spacing":"warn","semi-style":["warn","last"],"space-before-blocks":["warn",{functions:"always",keywords:"always",classes:"always"}],"space-before-function-paren":["warn",{anonymous:"always",named:"never",asyncArrow:"always"}],"space-in-parens":["warn","never",{exceptions:["{}","[]","()"]}],"space-infix-ops":["warn",{int32Hint:!1}],"space-unary-ops":[2,{words:!0,nonwords:!1,overrides:{new:!1,"++":!0}}],"switch-colon-spacing":"warn","template-curly-spacing":"warn","template-tag-spacing":["warn","never"],"unicode-bom":"error","wrap-iife":["warn","inside",{functionPrototypeMethods:!0}],"wrap-regex":"warn","yield-star-spacing":["warn","after"]},overrides:[{files:["*.tsx","*.jsx","*.ts"],rules:{"max-len":["warn",{code:120,ignoreComments:!0,ignoreTrailingComments:!0,ignoreUrls:!0}]}},{files:["*.tsx","*.jsx"],rules:{"max-lines-per-function":["warn",200],"arrow-parens":["warn","always"]}},{files:["*.tsx","*.ts","*.mts","*.cts"],rules:{"no-undef":"off"}}]};