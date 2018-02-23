module.exports = function check(str, bracketsConfig) {
  // your solution
  var temp_str_open = [];
  var temp_str_close = [];
  var open =[], close = [];
  for (let i = 0; i < bracketsConfig.length; i++ ){
  	open.push(bracketsConfig[i][0]);
  	close.push(bracketsConfig[i][1]);
  }

  for( let i = 0; i < str.length; i++ ){
  	for( let j = 0; j < open.length; j++ ){
  		if( str[i] === open[j] ){
  			temp_str_open.push(str[i])
  		}
  	}
  	for( let k = 0; k < close.length; k++ ){
  		if( str[i] === close[k] ){
  			temp_str_close.push(str[i])
  		}
  	}
  }

  if(temp_str_open.length === temp_str_close.length && temp_str_open.length % 2 === 0){
  	return true;
  } else {
  	return false;
  }

}
