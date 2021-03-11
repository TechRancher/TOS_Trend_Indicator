#
# Author: TechRancher
# Date: 03 / 2021
# Follow: HTTPS://www.github.com/TechRancher
#
# This will detect the trend of your chart based off the time of
# your chart and the time you set the Trend_Indicator to detect.
# Example: 1D 1M chart with trend length time frame at 20 would
# give you the trend for the past 20 minutes. This will be
# displayed in the top left of your chart as either Uptrend or 
# Downtrend. You can adjust the trend length time frame in the 
# Trend_Indicator Customizing window. The README file explains 
# how to do this.
#

# User Input
input trendLengthTimeFrame = 20;


# Trend Indicator
AddLabel(yes, if IsAscending(close, trendLengthTimeFrame) then "Uptrend" else "Downtrend");