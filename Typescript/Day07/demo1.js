//json Object 
// java script Object Notation 
// key & value format data is store 
var jsonObj = {
    id: 9,
    'fname': 'Sumit',
    lname: 'Raokhande'
};
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
var arrObj = [
    {
        id: 9,
        'fname': 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["Jan", "May", "Dec"],
        result: [
            {
                subj: 'M1',
                marks: 40
            },
            {
                subj: 'M2',
                marks: 45
            },
            {
                subj: 'M3',
                marks: 50
            }
        ]
    },
    {
        id: 6,
        'fname': 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'USA'
        },
        month: ["Feb", "Aug", "Nov"],
        result: [
            {
                subj: 'M1',
                marks: 50
            },
            {
                subj: 'M2',
                marks: 65
            },
            {
                subj: 'M3',
                marks: 70
            }
        ]
    },
    {
        id: 3,
        'fname': 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ["March", "July", "Oct"],
        result: [
            {
                subj: 'M1',
                marks: 42
            },
            {
                subj: 'M2',
                marks: 55
            },
            {
                subj: 'M3',
                marks: 60
            }
        ]
    }
];
// console.log(`
//     ID          :: ${arrObj[1].id}
//     First Name  :: ${arrObj[1].fname}
//     Last Name   :: ${arrObj[1].lname}
// `);
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n    ID          :: ".concat(arrObj[i].id, "\n    First Name  :: ").concat(arrObj[i].fname, "\n    Last Name   :: ").concat(arrObj[i].lname, "\n    Country     :: ").concat(arrObj[i].country.cname, "\n    Month       :: ").concat(arrObj[i].month.join(" "), "\n    ------------Result------------------\n"));
    // for(let j=0;j<arrObj[i].result.length;j++){
    //         console.log(`
    //               Subject :: ${arrObj[i].result[j].subj}
    //               Marks   :: ${arrObj[i].result[j].marks}
    //         `);
    // }
    arrObj[i].result.forEach(function (item) {
        console.log("\n            Subject :: ".concat(item.subj, "\n            Marks   :: ").concat(item.marks, "\n        "));
    });
}
