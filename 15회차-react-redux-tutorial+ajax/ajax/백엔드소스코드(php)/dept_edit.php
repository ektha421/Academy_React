<? header('Content-Type: text/html; charset=UTF-8'); ?>
<?
    include_once('./inc/helper.php');
    include_once('./inc/db_helper.php');

    // $deptno = post('deptno', FALSE);
    // $dname = post('dname', FALSE);
    // $loc = post('loc', FALSE);
    parse_str(file_get_contents("php://input"), $post_vars);
    $deptno = $post_vars['deptno'];
    $dname = $post_vars['dname'];
    $loc = $post_vars['loc'];

    if (!$deptno) {
        print_rest_api('학과번호 값이 없습니다.', FALSE);
    }

    if (!$dname) {
        print_rest_api('학과이름을 입력하세요.', FALSE);
    }

    if (!$loc) {
        print_rest_api('위치를 입력하세요.', FALSE);
    }

    db_open();

    $sql = "UPDATE department SET dname='%s', loc='%s' WHERE deptno=%d";

    $input = array($dname, $loc, $deptno);

    $result = db_query($sql, $input);

    if ($result === FALSE) {
        print_rest_api('데이터 수정에 실패했습니다. 관리자에게 문의하세요.', FALSE);
    }

    if ($result < 1) {
        print_rest_api('수정된 데이터가 없습니다.', FALSE);
    }

    db_close();

    print_rest_api('OK', FALSE);
?>
