#!/usr/bin/env bash
dotnet tool restore
dotnet tool run KontentModelGenerator -p "a9b221f5-7375-01af-4d91-67a87cb4e991" -o "./Models" -n "StartBootstrap.Freelancer.Blazor.Models" -g true