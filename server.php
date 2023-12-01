<?php

$filecontent = file_get_contents("todo-list.json");

$list = json_decode($filecontent, true);
if(isset($_POST['task'])){
    $Newtask=[
        'id' => count($list) + 1,
        'text' => $_POST['task'],
        'done' => false,
    ];
    $list[] = $Newtask;
    file_put_contents('todo-list.json',json_encode($list));
}

if(isset($_POST['updatetask'])){
    $index = $_POST['updatetask'];
    $list[$index]['done'] = !$list[$index]['done'];
    file_put_contents('todo-list.json',json_encode($list));
}
if(isset($_POST['removetask'])){
    $index = $_POST['removetask'];
    array_splice($list,$index,1);
    file_put_contents('todo-list.json',json_encode($list));
}


header('Content-Type: application/json');

echo json_encode($list);
?>