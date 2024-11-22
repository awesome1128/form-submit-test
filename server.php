<?php
// Server side
if ( isset($_POST['email']) && $_POST['email'] ) {
    echo json_encode('Success!');
} else {
    echo json_encode('Failed!');
}

?>