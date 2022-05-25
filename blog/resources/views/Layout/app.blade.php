<html>
<head>
    <title> @yield('title') </title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <script type="text/javascript" src="{{asset('js/jquery.js')}}"></script>
    
</head>
<body>
    



@yield('content')

<script type="text/javascript" src="{{asset('js/app.js')}}"></script>
</body>
</html>