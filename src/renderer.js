const blessed = require('blessed');
const fs = require('fs');

module.exports.render = async function() {
    screen.render();
}


module.exports.init = function(screen) {
    let window = blessed.box({
        top: 'center',
        left: 'center',
        width: '100%',
        height: '100%',
        content: 'Vanadium Browser',
        tags: true,
        border: {
            type: 'line',
            fg: 'black'
        },
        scrollbar: {
            bg: 'blue'
        },
        focus: {
            bg: 'red'
        },
        hover: {
          bg: 'red'
        },
        style: {
            fg: 'white',
            bg: 'white',
            border: {
                fg: '#f0f0f0'
            }
        }
    });
    
    let menbox = blessed.box({
		top: -2,
		left: -1,
		height: '15%',
        width: '110%',
        border: {
            type: 'line',
        },
	});
	let reload = blessed.button({
        content: 'R',
        top: 0,
        left: 1,
        width: 1,
        parent: menbox,
    });
    
    let left = blessed.line({
        parent: menbox,
        type: 'line',
        height: '100%',
        width: 1,
        left: -1,
        top: -1,
    });

    var WWd = process.stdout.columns;
    WWd = WWd - 2;
    let right = blessed.line({
        parent: menbox,
        type: 'line',
        height: '100%',
        width: 1,
        left: WWd,
        top: -1,
    });
    
    
	let backButton = blessed.button({
        content: '<',
        top: 0,
        left: 3,
        width: 1,
        parent: menbox,
	});
    let forwardButton = blessed.button({
        content: '>',
        top: 0,
        left: 5,
        width: 1,
        parent: menbox,
	});

    let searchBar = blessed.form({
        parent: menbox,
        width: '70%',
        height: 1,
        left: 7
      });
      let prog = blessed.textbox({
        parent: searchBar,
        name:'program',
        inputOnFocus: true,
        left: 0,
        top: 0,
        width: '50%',
        style: {
            bg: '#55555555',
        }
      });	
	
	let pageBody = blessed.box({
		top: '20%',
		left: 0,
		
        style: {
            bg: 'white',
            fg: 'black',
        },
	})

   
    //trying to make a text box... looking at docs

    screen.title = 'Vanadium Browser';
	window.append(menbox);
	window.append(pageBody)
	screen.append(window);

	return window;
}

/* module.exports.NotSus = function() {
    let i;
    for(i = 0; i < 99; i++) {
        console.log(i);   
    }
} */ 