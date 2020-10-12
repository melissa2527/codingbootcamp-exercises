<h1>Here is the form</h1>
<form action="" method="post">
    <?php foreach ($items as $i => $text) : ?>
        <input type="text" value="<?= htmlspecialchars($text) ?>" name="items[<?= $i ?>]">
    <?php endforeach; ?>
    <input type="text" value="" placeholder="new item" name="items[<?= count($items) ?>]">
    <button>Add</button>

</form>