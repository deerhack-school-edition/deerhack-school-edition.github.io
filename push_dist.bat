@echo off
setlocal enabledelayedexpansion

set "REPO_URL=https://github.com/deerhack-school-edition/deerhack-school-edition.github.io.git"
set "BRANCH=dev"
set "TEMP_DIR=%TEMP%\push_dist_%RANDOM%_%TIME::=%"
set "TEMP_DIR=%TEMP_DIR: =%"
set "TEMP_DIR=%TEMP_DIR:.=%"

:: Build the project
call npm run build
if %errorlevel% neq 0 exit /b %errorlevel%

:: Ensure dist exists
if not exist "dist\" (
  echo Error: dist/ directory not found.
  exit /b 1
)

:: Clone the deployment branch
git clone --depth 1 --branch "%BRANCH%" "%REPO_URL%" "%TEMP_DIR%\repo"
if %errorlevel% neq 0 (
  rd /s /q "%TEMP_DIR%" 2>nul
  exit /b %errorlevel%
)

:: Preserve CNAME before wiping
if exist "%TEMP_DIR%\repo\CNAME" (
  copy /y "%TEMP_DIR%\repo\CNAME" "%TEMP_DIR%\CNAME.bak" >nul 2>&1
)

:: Replace branch contents with dist contents
for /d %%D in ("%TEMP_DIR%\repo\*") do (
  if /i not "%%~nxD"==".git" rd /s /q "%%D"
)
for %%F in ("%TEMP_DIR%\repo\*") do (
  del /f /q /a "%%F" 2>nul
)
xcopy /e /i /h /y "dist\*" "%TEMP_DIR%\repo\" >nul

:: Restore CNAME
if not exist "%TEMP_DIR%\repo\CNAME" (
  if exist "%TEMP_DIR%\CNAME.bak" (
    copy /y "%TEMP_DIR%\CNAME.bak" "%TEMP_DIR%\repo\CNAME" >nul 2>&1
  ) else (
    echo hackathon.deerwalk.edu.np> "%TEMP_DIR%\repo\CNAME"
  )
)

:: Commit and push changes
cd /d "%TEMP_DIR%\repo"
git add -A

git diff --cached --quiet
if %errorlevel% neq 0 (
  git commit -m "Deploy site"
  git push origin "%BRANCH%"
) else (
  echo No changes to deploy.
)

:: Cleanup
cd /d "%~dp0"
rd /s /q "%TEMP_DIR%" 2>nul

echo Deployment complete!
endlocal
