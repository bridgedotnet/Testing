rem
set SITE_PATH=%cd%

if exist "C:\Program Files" (
 cd "C:\Program Files\IIS Express"
 )
else (
 cd "C:\Program Files (x86)\IIS Express"
)

iisexpress.exe -path:"%SITE_PATH%" -port:20000


