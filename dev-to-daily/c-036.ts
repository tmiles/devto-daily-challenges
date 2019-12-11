/**
 * https://dev.to/thepracticaldev/daily-challenge-36-let-s-go-for-a-run-2nbh
 */
export function calculatePace(distance: number, time: string) : string {
  if(distance < 0) { return null; } 
  let secs = parseInt(time.split(":")[0]) * 60 + parseInt(time.split(":")[1]);
  let rate = secs/distance;
  return (rate > 59) ? `${Math.floor(rate/60)}:${rate % 60}`: `0:${rate}`;
}