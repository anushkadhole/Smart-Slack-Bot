Write-Host "Restarting important service..."
Restart-Service -Name 'Spooler' -Force
Write-Host "Service restarted successfully!"
