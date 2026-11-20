[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/farah2222/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/farah2222/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

# The World in One Day — 20 November 2026

One image summing up the world's news of Friday 20 November 2026, built for the [make.fun "Sum up 20 November's world news in one image" bounty](https://make.fun/bounty/news-image-20261120) ($250 in prizes, free to enter).

The image is a newspaper front page: the date across the top, then six stories from six regions, each with a pictogram, a region tag, a headline and one short caption:

| Story | Region / field |
| --- | --- |
| Trump, Xi and Putin's first trilateral ends with a four-point peace declaration | Asia · diplomacy |
| The ICJ rules 9–6 that Myanmar committed genocide against the Rohingya | The Hague · law |
| Cyclone Akvan makes landfall near Gopalpur, Odisha; 300,000 evacuated | India · disaster |
| Trump says he will decide on Iran after the new year: "I'm not rushing" | United States · Middle East |
| European leaders in Berlin say they are ready to negotiate with Russia on Ukraine | Europe · security |
| GTA VI's day-one sales pass $1.84bn, beating The Odyssey's cinema run | Global · culture |

Every story was first reported on 20 November 2026 in some time zone (19 November evening UTC is 20 November in Asia-Pacific), or happened that day. Sources: Reuters, BBC, The Hindu, IMD, Sensor Tower.

The image is drawn in code (PIL + DejaVu) so every letter stays crisp at any size.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to the output directory as `entry.png`. It needs no network and writes the same bytes on every run.
