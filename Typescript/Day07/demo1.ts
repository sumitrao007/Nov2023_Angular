//json Object 
// java script Object Notation 
// key & value format data is store 

let jsonObj={
    id:9,
    'fname':'Sumit',
    lname:'Raokhande'
}

// U can Access in 2 different way
// 1 Using dot operator
// 2 Using square opertor 

// 1 Using dot operator

// console.log(`
//     ---------------------
//     ID          :: ${jsonObj.id}
//     First Name  :: ${jsonObj.fname}
//     Last Name   :: ${jsonObj.lname}
// `);

// 2 Using square opertor 

// console.log(`
//     --------Square Operator-------------
//     ID          :: ${jsonObj["id"]}
//     First Name  :: ${jsonObj['fname']}
//     Last Name   :: ${jsonObj["lname"]}
// `);

// Array of Object 

let arrObj=[
    {
        id:9,
        'fname':'Sumit',
        lname:'Raokhande',
        country:{
            cid:1,
            cname:'India'
        },
        month:["Jan","May","Dec"],
        result:[
            {
                subj:'M1',
                marks:40
            },
            {
                subj:'M2',
                marks:45
            },
            {
                subj:'M3',
                marks:50
            }
        ]
    },
    {
        id:6,
        'fname':'Kiran',
        lname:'Raokhande',
        country:{
            cid:2,
            cname:'USA'
        },
        month:["Feb","Aug","Nov"],
        result:[
            {
                subj:'M1',
                marks:50
            },
            {
                subj:'M2',
                marks:65
            },
            {
                subj:'M3',
                marks:70
            }
        ]
    },
    {
        id:3,
        'fname':'Spruha',
        lname:'Raokhande',
        country:{
            cid:3,
            cname:'Japan'
        },
        month:["March","July","Oct"],
        result:[
            {
                subj:'M1',
                marks:42
            },
            {
                subj:'M2',
                marks:55
            },
            {
                subj:'M3',
                marks:60
            }
        ]
    }

];

// console.log(`
//     ID          :: ${arrObj[1].id}
//     First Name  :: ${arrObj[1].fname}
//     Last Name   :: ${arrObj[1].lname}
// `);


for(let i=0;i<arrObj.length;i++){

    console.log(`
    ID          :: ${arrObj[i].id}
    First Name  :: ${arrObj[i].fname}
    Last Name   :: ${arrObj[i].lname}
    Country     :: ${arrObj[i].country.cname}
    Month       :: ${arrObj[i].month.join(" ")}
    ------------Result------------------
`);

// for(let j=0;j<arrObj[i].result.length;j++){
//         console.log(`
//               Subject :: ${arrObj[i].result[j].subj}
//               Marks   :: ${arrObj[i].result[j].marks}
//         `);
// }

    arrObj[i].result.forEach((item)=>{
        console.log(`
            Subject :: ${item.subj}
            Marks   :: ${item.marks}
        `)
    })


}
