////////////////////////////////////////
if(typeof fs === 'undefined') fs = {};
/**
 * Multi support on browser and console
 */
isBrowser = false;
if (typeof module !== 'undefined') {
    module.exports = fs;
}
else{
    isBrowser = true;
}
////////////////////////////////////////

/**
 * Function will add any number of
 * of argument
 * 
 *  @param {mixed} depends on what argument contain
 *  @return {number} calculated number
 */
fs.test = function(arr) {
    let len = arr.length;
    let output = 0;
    let max = arr[0];
    let map = [];

    // Travel one by one column
    for(var i =0; i < len; i++){
        current = arr[i];
        if(max < current){
            max = current;
        }
        map[i] = max - current;

        let end = current;
        // Reached at end
        if(i == len-1 && current < max){
            let max2 = 0;
            for(var j = i; j > 0; j--){
                current = arr[j];
                if(current < max2){
                    map[j] = max2 - current;
                }else{
                    max2 = current;
                    map[j] = 0;
                }
                if(max ==  max2){
                    break;
                }
            }
        }
    }

    for(var i in map){
        output +=map[i];
    }
    return output;
}

/**
 * Function will create preview
 * of argument
 * 
 *  @param {mixed} depends on what argument contain
 *  @return {number} calculated number
 */
fs.preview = function(input, index) {
    if(!isBrowser) return false;

    (function (input, index) {
        setTimeout(function () {
            var max = Math.max(...input);
            var styles = '';
            var table = '';

            for (var j = max; j > 0 ; j--) {

                table +='<tr>';
                for (var i in input) {
                    styles = '';
                    if(input[i] >= j){
                        styles = 'style="background:#00d6b2"';
                    }
                    table +=`<td ${styles}></td>`;
                }
                table +='</tr>';
            }
            var html = `<hr/>
                <table border="1" cellpadding="10">
                        ${table}
                </table>
            `;
            document.querySelector(`#mocha-report ul li:nth-child(${index+1}) pre`).innerHTML += html;
        }, 0);
    })(input, index);

}

