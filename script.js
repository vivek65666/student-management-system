let students = JSON.parse(localStorage.getItem('students')) || [];
let editIndex = -1;

function save(){localStorage.setItem('students', JSON.stringify(students));}

function addStudent(){
 const name=document.getElementById('name').value.trim();
 const sid=document.getElementById('sid').value.trim();
 const course=document.getElementById('course').value.trim();

 if(!name || !sid || !course){
   alert('Fill all fields');
   return;
}

const exists = students.some(student => student.sid === sid);

if(exists && editIndex === -1){
   alert("Student ID already exists!");
   return;
}

 if(editIndex>=0){
   students[editIndex]={name,sid,course};
   editIndex=-1;
 }else{
   students.push({name,sid,course});
 }

 save();
 document.getElementById('name').value='';
 document.getElementById('sid').value='';
 document.getElementById('course').value='';
 renderStudents();
}

function renderStudents(){
 const search=document.getElementById('search').value.toLowerCase();
 const table=document.getElementById('studentTable');
 table.innerHTML='';

 students.filter(s =>
   s.name.toLowerCase().includes(search) ||
   s.sid.toLowerCase().includes(search) ||
   s.course.toLowerCase().includes(search)
 ).forEach((s,i)=>{
   table.innerHTML += `<tr>
   <td>${s.name}</td>
   <td>${s.sid}</td>
   <td>${s.course}</td>
   <td>
   <button onclick="editStudent(${i})">Edit</button>
   <button onclick="deleteStudent(${i})">Delete</button>
   </td>
   </tr>`;
 });

 document.getElementById('count').innerText = students.length;
}

function editStudent(i){
 document.getElementById('name').value=students[i].name;
 document.getElementById('sid').value=students[i].sid;
 document.getElementById('course').value=students[i].course;
 editIndex=i;
}

function deleteStudent(i){

 if(confirm("Are you sure you want to delete this student?")){
   students.splice(i,1);
   save();
   renderStudents();
 }

}

renderStudents();
