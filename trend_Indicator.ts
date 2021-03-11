#
# Author: TechRancher
# Date: 03 / 2021
# Follow: HTTPS://www.github.com/TechRancher
#

# User Input
# Set this for the length of time you want to check for a trend.Be # aware this will be based of your time of Charts.Example: 1D 1M  # chart with trend length time frame at 20 would give me the trend # for the past 20 minutes.

input trendLengthTimeFrame = 20;


# Trend Indicator
# This will display on your chart the trend as a label.

AddLabel(yes, if IsAscending(close, trendLengthTimeFrame) then "Uptrend" else "Downtrend");