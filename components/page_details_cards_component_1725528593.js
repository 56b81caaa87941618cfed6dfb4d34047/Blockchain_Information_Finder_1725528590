<!--
INSTRUCTION: Summary: Contains a section with three cards with black background and white text. The three cards are side by side and each contains a detail name in bold above a detail value.
-->

<template>
  <section id="page-details-cards-component" class="py-8 bg-white">
    <h2 id="details-title" class="text-lg font-semibold mb-5 pl-4">Details</h2>
    <ul id="details-list" class="grid gap-4 min-[480px]:grid-cols-3 text-sm">
      <li id="project-length" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="font-medium text-slate-200">Real-Time Updates</div>
        <div class="text-slate-400">Get instant notifications on the latest blockchain developments, ensuring you're always ahead of the curve.</div>
      </li>
      <li id="start-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="font-medium text-slate-200" id="start-date-des-1">Comprehensive Coverage</div>
        <time class="text-slate-400" id="start-time-des-1">Access information on a wide range of blockchain networks, cryptocurrencies, and decentralized projects all in one place.</time>
      </li>
      <li id="end-date" class="px-5 py-4 rounded-lg bg-gradient-to-tr from-slate-950 to-slate-800 dark:from-slate-800/80 dark:to-slate-900">
        <div class="font-medium text-slate-200" id="end-date-des-1">User-Friendly Interface</div>
        <time class="text-slate-400" id="end-time-des-1">Easily navigate through complex blockchain data with our intuitive and customizable dashboard.</time>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "PageDetailsCardsComponent",
  data() {
    return {
      expanded: false,
      tab: null,
    };
  },
};
</script>
