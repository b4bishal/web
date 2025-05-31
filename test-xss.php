<!DOCTYPE html>
<html>
<head>
    <title>OG XSS Test</title>
    <meta property="og:title" content="<?= htmlspecialchars($_GET['title'] ?? 'Default Title') ?>">
    <meta property="og:description" content="<?= htmlspecialchars($_GET['desc'] ?? 'Default Description') ?>">
    <meta property="og:image" content="https://bishalkafle.info.np/pic.jpg">
</head>
<body>
    <h1>Check Facebook Preview</h1>
</body>
</html>
