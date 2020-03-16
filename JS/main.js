var app = document.getElementById('app')
// var mynum = this.innerHTML
var num=[];


// --------------------------------------Creating Classes-----------------------------------------------\\

class Createbase {
    constructor(element, classname, textHTML = '',style = '', id = '') {
        this.element = document.createElement(element)
        this.element.className = classname
        this.element.style = style
        this.element.id = id
        this.element.innerHTML = textHTML
        this.chararr = []
    }
}



class View {
    constructor(controller){
        this.controller = controller
    }
    
    build(){
        //instance that creates background container row and col
        var basecontainer = new Createbase('div','container bg-dark text-center text-white rounded','','min-height: 80vh; max-width: 25rem')
        var baserow1 = new Createbase('div','row','','','baserow1')
        var baserow2 = new Createbase('div','row','','min-height: 30rem','baserow2')
        var basecol1 = new Createbase('div','col-12 mx-auto')
        var basecol2 = new Createbase('div','col-9 p-1','','','basecol2')
        var basecol3 = new Createbase('div','col-3 pl-3 pr-0 pt-1','','','basecol3')
        // var basetext = new Createbase('p','','BASE CONTAINER')
        
        //instance to create display for calculated values
        var sitecontainer = new Createbase('div','container bg-white text-right rounded mx-auto my-3 p-1','','height: 23vh;')
        var siterow1 = new Createbase('div','row text-dark h-50','','')
        var siterow2 = new Createbase('div','row text-dark h-50','','')
        var sitecol1 = new Createbase('div','col-12')
        var sitecol2 = new Createbase('div','col-12')
        var sitetext1 = new Createbase('div','','inputs')
        var sitetext2 = new Createbase('div','','0')
        
        sitecol1.element.appendChild(sitetext1.element)
        sitecol2.element.appendChild(sitetext2.element)
        siterow1.element.appendChild(sitecol1.element)
        siterow2.element.appendChild(sitecol2.element)
        sitecontainer.element.appendChild(siterow1.element)
        sitecontainer.element.appendChild(siterow2.element)
        basecol1.element.appendChild(sitecontainer.element)
        
        //instances to create display for number/operator buttons 
        // var numcontainer = new Createbase('div','container bg-white text-right rounded mx-auto my-3 p-1','','height: 60vh;')
        // var opercontainer = new Createbase('div','container bg-white text-right rounded mx-auto my-3 p-1','','height: 60vh;')
        
        var numrow = new Createbase('div','row d-flex flex-sm-row-reverse bg-dark text-dark w-100 ml-1','','min-height: 32rem; margin-left: 1px;','numrow')
        var operow = new Createbase('div','row d-flex flex-column bg-dark text-dark h-100 w-100','','','operow')
        
        var operarr1 = [".","="];
        var operarr2 = ["AC","+","-","x","/"];
        
        //numbers
        
        for(let i = 9; i >= 0; i--){
            var numcols =  new Createbase('button','btn col-4 bg-white rounded-circle m-2',`${i}`,'max-width: 75px; max-height: 80px;',`${i}`)
            // numcols.element.onclick = this.clicky.bind(this.controller)
            numrow.element.appendChild(numcols.element)

        }
        //operators
        for(let i = 0; i < operarr1.length; i++){
            var numoper1 =  new Createbase('button','btn col-4 bg-white rounded-circle m-2',`${operarr1[i]}`,'max-width: 75px; max-height: 80px;',`${operarr1[i]}`)
            // numoper1.element.onclick = this.controller.bind(this.clicky)
            numrow.element.appendChild(numoper1.element)
            

        }
        // operators: . = 
        for(let i = 0; i < operarr2.length; i++){
            var numoper2 =  new Createbase('button','btn col-4 bg-white rounded-circle m-2',`${operarr2[i]}`,'max-width: 75px; max-height: 80px;',`${operarr2[i]}`)
            // numoper2.element.onclick = this.controller.clicky.bind(this)
            operow.element.appendChild(numoper2.element)
        }
        
        basecol2.element.appendChild(numrow.element)
        basecol3.element.appendChild(operow.element)
        
        
        
        //-------------------------------- Appending items-----------------------------------\\
        
        // basecol.element.appendChild(basetext.element)
        baserow1.element.appendChild(basecol1.element)
        baserow2.element.appendChild(basecol2.element)
        baserow2.element.appendChild(basecol3.element)
        basecontainer.element.appendChild(baserow1.element)
        basecontainer.element.appendChild(baserow2.element)
        app.appendChild(basecontainer.element)

    }

    updateview(){
        this.controller.model = current
    }


}

//event controller
class Controller{
    constructor(model){
        this.model = model
        this.current = 0;
    }

    clicky(e){
        this.model.updatescreen(e);
    }

}

//state and storage iterator
class Model {
    constructor(view){
        this.view = view
        this.input= ""
    }
    updatescreen(e){
        console.log(e.target.textContent)

    }

}


//-------------------------------------------Instances----------------------------------------------------\\

var view = new View();
var controller = new Controller();
var model = new Model();


view.build();
controller.clicky();
model.updatescreen();





// class Numbase extends Createbase{
//     constructor(element, classname, textHTML, style = '', id = ''){
//     super(element,classname,textHTML,style,id)
//     this.element.onclick = this.numberclick.bind(this)
//     }

//     numberclick(){
//         console.log(this)
//         this.chararr.push(this.element.id)
//         console.log(this.chararr)
//     }

// }

            

            
            