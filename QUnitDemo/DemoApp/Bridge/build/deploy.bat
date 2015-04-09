cd "..\DemoAppSite\js"
del *.js /f /s /q

xcopy "..\..\DemoApp\Bridge\output\*.js" "." /Y /I /S

