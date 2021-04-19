#
# Trend Indicator Label
# Author: TechRancher
# Date: 03 / 2021
# Follow: HTTPS://www.github.com/TechRancher
# README.md: HTTPS://www.github.com/TechRancher/TOS_Trend_Indicator/
#
# This will detect the trend of your chart based off the
# time of your chart and the time you set the
# Trend_Indicator to detect.
# Example: 1D 1M chart with trend length time frame at 5 
# would give you the trend for the past 5 bars. This
# will be displayed in the top left of your chart as either
# Uptrend or Downtrend. You can adjust the trend length
# time frame in the Trend_Indicator Customizing window. 
# The README file explains how to do this.
#

# User Input
#hint trendLengthTimeFrame: This time is how far back in bars you want to calculate to determine the trend.
input trendLengthTimeFrame = 5;


# Trend Indicator
AddLabel(yes, if close from trendLengthTimeFrame bars ago < close then "Uptrend" else "Downtrend");